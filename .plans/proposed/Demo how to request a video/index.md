	In [9]: history
	import requests
	response = requests.get('http://thomaslevine.com/!/open-data-in-plain-english/open-data-in-plain-english.webm')
	response.status_code
	response.headers
	response.content[:10]
	fp = open('/tmp/a.webm', 'wb')
	fp.write(response.content)
	open('/tmp/aasdfasdf', 'w').write('subway')
	history