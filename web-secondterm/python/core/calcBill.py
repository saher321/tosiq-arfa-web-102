# user defined units
consumedUnits = int(input("Enter units: "))

# relief
subSidy = 500

# pre defined units price
basicUnit       = 38
standardUnit    = 44
primeUnit       = 60
commercialUnit  = 70

#  Taxes
gst     = 45
tvFee   = 35
fap     = 144

# range of 150 - 200 units
if consumedUnits > 150 and consumedUnits < 201:
    bill = basicUnit * consumedUnits + gst + tvFee + fap
    bill = bill - subSidy
    print("Current bill of June is: ", bill)

elif consumedUnits > 200 and consumedUnits < 301: 
    bill = standardUnit * consumedUnits + gst + tvFee + fap
    print("Current bill of June is: ", bill)

elif consumedUnits > 300 and consumedUnits < 401:
    bill = primeUnit * consumedUnits + gst + tvFee + fap
    print("Current bill of June is: ", bill)

elif consumedUnits > 400:
    bill = commercialUnit * consumedUnits + gst + tvFee + fap
    print("Current bill of June is: ", bill)

else: 
    print("Invalid units")
