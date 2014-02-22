I finally started playing with the open data census data. The data are in a Google Spreadsheet.

    $ git clone git@github.com:okfn/opendatacensus.git
    $ cd opendatacensus
    $ grep -ir docs.google|sed 's/.*http/http/'|sort
    http://docs.google.com/spreadsheet/pub?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc&single=true&gid=0&output=csv
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc#gid=0)
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc#gid=0)
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc&usp=drive_web#gid=0
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc&usp=drive_web#gid=1
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc&usp=drive_web#gid=3"
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc&usp=drive_web#gid=7
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0AqR8dXc6Ji4JdEg2elXXXX&usp=drive_web#gid=2';
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0AqR8dXc6Ji4JdFgwSjlabk0wY3NfT2owbktCME5MY2c
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0AqR8dXc6Ji4JdFI0QkpGUEZyS0wxYWtLdG1nTk9zU3c#gid=0',
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0AqR8dXc6Ji4JdG5FYWF5M0o1cHBvQkZLTUdOYWtlNmc
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0AqR8dXc6Ji4JdHR5WWdUU2dYUElPaFluUlBJbkFOMUE&usp=drive_web#gid=0
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=0AqR8dXc6Ji4JdHZoLXhLMjNVNjVPQzVlaU0tSjNUYlE#gid=0
    https://docs.google.com/a/okfn.org/spreadsheet/ccc?key=AAAA&usp=drive_web#gid=0
    https://docs.google.com/spreadsheet/pub?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc&single=true&gid=1&output=csv
    https://docs.google.com/spreadsheet/pub?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc&single=true&gid=1&output=csv');
    https://docs.google.com/spreadsheet/pub?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc&single=true&gid=3&output=csv';
    https://docs.google.com/spreadsheet/pub?key=0Aon3JiuouxLUdEVHQ0c4RGlRWm9Gak54NGV0UlpfOGc&single=true&gid=7&output=csv
    https://docs.google.com/spreadsheet/pub?key=0Aon3JiuouxLUdEVnbG5pUFlyUzBpVkFXbXJ2WWpGTUE&output=csv'
    https://docs.google.com/spreadsheet/pub?key=0AqR8dXc6Ji4JdEg2elXXXX&single=true&gid=2&output=csv';
    https://docs.google.com/spreadsheet/pub?key=0AqR8dXc6Ji4JdEg2elXXXX&single=true&gid=3&output=csv';
    https://docs.google.com/spreadsheet/pub?key=0AqR8dXc6Ji4JdFI0QkpGUEZyS0wxYWtLdG1nTk9zU3c&single=true&gid=0&output=csv';
    https://docs.google.com/spreadsheet/pub?key=0AqR8dXc6Ji4JdHR5WWdUU2dYUElPaFluUlBJbkFOMUE&single=true&gid=1&output=csv');
    https://docs.google.com/spreadsheet/pub?key=KEY&single=true&gid=INDEX&output=csv';

