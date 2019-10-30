const levenshtein = require('fast-levenshtein')

a = ['instrument',
'invasive equipment',
'non Invasive equipment',
'heart monitor',
'blood pressure strap',
'heart beat monitor',
'mobile cardiac telemetry',
'cannula',
'injection syringe',
'intradermal syringe',
'needle',
'susceptibility',
'flu',
'weakness',
'interventional',
'vulnerability',
'leather component',
'velcro component',
'plastic component']

b = ['instrument',
'invasive equipment',
'non Invasive equipment',
'heart monitor',
'blood pressure strap',
'heart beat monitor',
'mobile cardiac telemetry',
'cannula',
'injection syringe',
'intradermal syringe',
'needle',
'susceptibility',
'flu',
'weakness',
'interventional',
'vulnerability',
'leather component',
'velcro component',
'plastic component']

c = []

for(x in a){
    for(z in b){
        c.push({a:a[x],b:b[z],result:levenshtein.get(a[x],b[z])})
    }
}

console.log(c)
