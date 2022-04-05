# Importação dos dados ------------------------------------------

# Dependências
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np


# EXECUÇÃO PRINCIPAL ------------------------------------------

for port in range(10, 5000, 10):

    # Importa a converte os arquivos CSV
    try:
        wot = pd.read_csv(r'C206\Algoritmos - LAB\MKSENSE\saved_data\SensorialData_PORT_' + repr(port) + '.csv')
        wot = pd.DataFrame(wot, columns=['alt'])
    
    except:
        continue


    # Filtragem e preparação ------------------------------------------

    # Inicializa os vetores de dados
    vect_wot = np.array([])

    # Converte a coluna em uma lista de floats das altitudes
    for x in wot['alt'].tail(100):
        vect_wot = np.append(vect_wot, float(x))


    # Plota os valores da lista de números
    plt.plot(vect_wot, 'b')


    # Visualização ------------------------------------------

    # Amostragem dos vetores R e C da imagem
    plt.legend()
    plt.ylabel("Altitude")
    plt.savefig(r"C206\Algoritmos - LAB\MKSENSE\saved_data\images\fig_" + repr(port) + ".png")
    plt.close()
