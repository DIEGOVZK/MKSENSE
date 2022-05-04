# Importação dos dados ------------------------------------------

# Dependências
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np


# Funções -------------------------------------------------------

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

# EXECUÇÃO PRINCIPAL ------------------------------------------

for port in range(0, 65353, 1):

    # Importa a converte os arquivos CSV
    try:
        wot = pd.read_csv(r'sensorData\SensorialData_PORT_' + repr(port) + '.csv')
        wot = pd.DataFrame(wot, columns=['temp'])
    
    except:
        continue


    # Filtragem e preparação ------------------------------------------

    # Inicializa os vetores de dados
    vect_wot = np.array([])

    # Converte a coluna em uma lista de floats das altitudes
    for x in wot['temp'].tail(1000):
        vect_wot = np.append(vect_wot, float(x))

    # Aplica o filtro
    vect_wot = low_pass_filter(vect_wot, 0.1)

    # Plota os valores da lista de números
    plt.plot(vect_wot, 'b')


    # Visualização ------------------------------------------

    # Amostragem dos vetores R e C da imagem
    plt.legend()
    plt.ylabel("Altitude")
    plt.savefig(r"images\fig_" + repr(port) + ".png")
    plt.close()