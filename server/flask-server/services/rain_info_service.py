import requests
from bs4 import BeautifulSoup
from utils.processed_data import process_data

def get_weather_forecast():
    url = 'http://www.apac.pe.gov.br/previsoes-do-tempo'
    page = requests.get(url, headers={
        #'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        #'Cookie': '4e035915dbffeaf6212f6518600fd776=svf2uoj0v46q6ldm4kg6u2kpr5; _ga=GA1.1.1044431218.1685404204; _ga_LY3DHJ1EY3=GS1.1.1685404204.1.1.1685405109.0.0.0',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36'
        })
    print(page.status_code)

    if page.status_code == 200:
        soup = BeautifulSoup(page.content, 'html.parser')
        title = soup.find_all('th', {'colspan': '2', 'class': 'bg-warning'})
        print(title)
    else:
        print("deu erro")


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


