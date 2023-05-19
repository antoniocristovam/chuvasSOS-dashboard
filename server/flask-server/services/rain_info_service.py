import requests
from bs4 import BeautifulSoup
from utils.processed_data import process_data

def get_all_rainfall_index(local_cod):
    url = 'http://old.apac.pe.gov.br/_lib/pluviometria.request.php'
    page = requests.post(url, data={
                         'acao': 'exibePluviometrosRMRSite', 'local': local_cod, 'order': 'null'})

    if page.status_code == 200:
        soup = BeautifulSoup(page.content, 'html.parser')
        odd_values = soup.find_all('tr', {'class': 'odd'})
        local_tags = soup.find_all('span', {'class': 'glb-corpo-span-preto'})
        last_hours_tags = soup.find_all('td', {'colspan': '2'})
        date_time_tags = []

        for row in odd_values:
            column = row.find_all('td', {'class': 'medio'})
            date_time_tags.append(column[0])
            date_time_tags.append(column[1])

        return process_data(local_tags, last_hours_tags, date_time_tags)

    else:
        print("ERROR")
        raise Exception("Error to get data")


