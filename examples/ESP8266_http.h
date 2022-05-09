/**
 * @file       ESP8266_http.c
 * @author     Diego Anestor Coutinho
 * @license    MIT
 * @copyright  Copyright (c) 2022 Inatel Cubesat Design Team
 * @date       May 2022
 *
 * Contato: diego.anestor@gec.inatel.br ou diego.coutinho@inatel.br
 */


/* ---------------------------------- SIMPLE UI ---------------------------------- */

void blink_FAST()
{
    digitalWrite(BUILTIN_LED, LOW);
    delay(100);
    digitalWrite(BUILTIN_LED, HIGH);
    delay(100);
}

void blink_SLOW()
{
    digitalWrite(BUILTIN_LED, LOW);
    delay(100);
    digitalWrite(BUILTIN_LED, HIGH);
}

void blink_()
{
    digitalWrite(BUILTIN_LED, LOW);
    delay(25);
    digitalWrite(BUILTIN_LED, HIGH);
}


/* ---------------------------------- NETWORKING ---------------------------------- */

// Dependências
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>       
#include <WiFiClient.h>

// informações da rede WIFI
const int maxTry = 60;

// Nome do domínio ou IP de conexão com servidor
String serverName = "http://10.1.1.1:100";

// Informações da rede WIFI local
const char *password = "password";
const char *ssid = "ssid";

// Define o objeto HTTP
WiFiClient client;
HTTPClient http;

// Inicia conexão WIFI com roteador
bool conecta_wifi()
{
    // Desativa WiFi para impedir "cached connections"
    WiFi.disconnect();
    delay(100);

    // Inicialisa a conexão com o servidor
    pinMode(BUILTIN_LED, OUTPUT);
    WiFi.begin(ssid, password);

    // Aguarda 'maxTry' segundos
    unsigned char tentativas = 0;
    while (tentativas <= maxTry)
    {
        // Ao confirmar conexão, salta para "done"
        if (WiFi.status() == WL_CONNECTED)
            goto done;

        delay(1000);
        tentativas++;
        Serial.print("`");
    }

    // Caso saia do loop sem conectar
    while (1)
    {
        blink_FAST();
    }

    done:
    Serial.print("\nGot IP: ");
    Serial.println(WiFi.localIP());
    return 0;
}

// Firma uma conexão teste com o servidor para identificar erros
bool handshake(String ip = serverName)
{
    // Define o objeto HTTP
    String serverName = String(ip);

    // Configura servidor alvo
    http.begin(client, serverName);

    // Envia GET para servidor
    int httpCode = http.GET();
    Serial.print("[HTTP] GET >>\n");

    // Se o código é de erro ou não recebeu a resposta correta...
    if ((httpCode != HTTP_CODE_OK) || (String("200") != http.getString()))
    {

        // finaliza e retorna estado de erro
        blink_SLOW();
        return 1;
    }

    // END execução
    http.end();
    blink_();
    return 0;
}

// Envia os dados do sensor para o servidor HTTP
bool envia_dados(float data = -1)
{
    // Configura servidor alvo
    http.begin(client, serverName);

    // Inicia conexão e envia o Header do pacote HTTP
    http.addHeader("Content-Type", "application/json");

    // Envia pacote json para servidor
    int httpCode = http.POST(String(data, 3));
    Serial.print("[HTTP] POST >> \n");

    // Se o código é de erro ou não recebeu a resposta correta...
    if ((httpCode != HTTP_CODE_OK) || (String("200") != http.getString()))
    {
        // finaliza e retorna estado de erro
        blink_SLOW();
        return 1;
    }

    // END execução
    http.end();
    blink_();
    return 0;
}