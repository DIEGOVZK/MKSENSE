/**
 * @file       ESP8266_http.h
 * @author     Diego Anestor Coutinho
 * @license    MIT
 * @copyright  Copyright (c) 2022 Inatel Cubesat Design Team
 * @date       May 2022
 *
 * Contato: diego.anestor@gec.inatel.br ou diego.coutinho@inatel.br
 */

#include "ESP8266_http.h"

void setup()
{
    // Inicializa a serial
    Serial.begin(115200);

    // Conecta na rede wifi
    conecta_wifi();

    // Inicia conexão com servidor e configura a porta
    handshake("http://10.1.1.1:100");
}

void loop()
{
    // Recebe os dados
    double dados = 1124.51444;
    
    // Envia os dados
    char status = envia_dados(dados);

    // Verifica se o envio foi realizado com sucesso
    Serial.print("Status: ");
    Serial.println(status);

    // Printa os dados
    Serial.println(dados);

    // Delay para saída de dados
    delay(250);
}
