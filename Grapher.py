# Importação dos dados ------------------------------------------

# Dependências
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import sys

scanRange = 65353 # max 65353

# FUNÇÕES -------------------------------------------------------

# Function that takes a list of number and aplies a low pass filter to smooth the data
def low_pass_filter(vect_wot, alpha):

    # Inicializa os vetores de dados
    vect_wot_filtered = np.array([])
    
    # Aplica o filtro
    vect_wot_filtered = np.append(vect_wot_filtered, vect_wot[0])
    for i in range(1, len(vect_wot)):
        vect_wot_filtered = np.append(vect_wot_filtered, alpha * vect_wot[i] + (1 - alpha) * vect_wot_filtered[i - 1])
    
    # Retorna o vetor filtrado
    return vect_wot_filtered

# UI simples para mostrar o progresso do teste
def progress(count, total, count2, total2):
    bar_len = 60
    filled_len = int(round(bar_len * count / float(total)))

    percents = round(100.0 * count / float(total), 1)
    bar = '#' * filled_len + '·' * (bar_len - filled_len)

    sys.stdout.write("\033[1;32;40m[%s] %s%s ... %s/%s\033[0;37;40m" + " "*20 + "\r" %
                     (bar, percents, '%', count2, total2))
    sys.stdout.flush()

# EXECUÇÃO PRINCIPAL ------------------------------------------

for port in range(0, scanRange, 1):

    # Mostra o progresso da execução
    progress(port, scanRange, port, scanRange)

    # Importa a converte os arquivos CSV
    try:
        wot = pd.read_csv(r'sensorData\SensorialData_PORT_' + repr(port) + '.csv')
        wot = pd.DataFrame(wot, columns=["alt"])
    
    except:
        continue


    # Filtragem e preparação ------------------------------------------

    # Inicializa os vetores de dados
    vect_wot = np.array([])

    # Converte a coluna em uma lista de floats das altitudes
    for x in wot["alt"].tail(1000):
        vect_wot = np.append(vect_wot, float(x))

    # Aplica o filtro
    vect_wot = low_pass_filter(vect_wot, 0.25)

    # Plota os valores da lista de números
    plt.plot(vect_wot, 'b')


    # Visualização ------------------------------------------

    # Amostragem dos vetores R e C da imagem
    plt.legend()
    plt.ylabel("Altitude ^-1 (cm)")
    plt.savefig(r"images\fig_" + repr(port) + ".png")
    plt.close()

# Limpa a tela
sys.stdout.write("\033[0;37;40m" + " "*500)