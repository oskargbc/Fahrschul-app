import requests
from bs4 import BeautifulSoup

class Server:
    def __init__(self, s):
        self.session: requests.Session() = s
        self.cookies = []

    def login(self, username: str, password: str) -> dict:
        url = "https://schueler.click-learn.info/auth"

        if username == "":
            username = "impossible"

        payload={'Continue': 'https://schueler.click-learn.info/Home/Index',
                 'UserName': username,
                 'Password': password}

        headers = {
          'Host': 'schueler.click-learn.info',
          'method': 'GET',
          'scheme': 'https',
          'accept': '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
          'cache-control': 'no-cache',
          'pragma': 'no-cache',
          'referer': 'https://schueler.click-learn.info/login?redirect=https%3a%2f%2fschueler.click-learn.info%2fHome%2fIndex',
          'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
        }

        response = self.session.post(url=url, headers=headers, data=payload)

        soup = BeautifulSoup(response.text, "html.parser")

        name = " ".join(str(soup.find_all("h1").pop()).replace("<h1>", "").replace("</h1>", "").split()[1:])
        print(name)

        if username in response.text and "Lernen nach Themen" in response.text and "BEREIT?" in response.text:
            logged_in = True
            self.cookies = str(response.cookies)
        else:
            logged_in = False

        return {
            "status_login": logged_in,
            "status_web": response.status_code,
            "username": username,
            "cookies": str(self.session.cookies),
            "name": name,
        }

        return res

