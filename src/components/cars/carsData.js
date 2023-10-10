const carsData=[
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
        title : "Mazda MX-5",
        price : "$499/day",
        class : "Sports car Roadster"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg/400px-Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg",
        price : "$399/day",
        title: "Mazda MX-3",
        class: "Small family car"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
        title: "Porsche Cayenne",
        price : "$799/day",
        class : "Mid-size luxury crossover SUV"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
        title: "Vauxhall Chevette",
        price : "$199/day",
        class: "Supermini"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
        title: "Ford Crown Victoria",
        price : "$649/day",
        class: "Full-size Ford"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
        title: "Plymouth Superbird",
        price : "$359/day",
        class: "Muscle car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
        title: "Saab 9000",
        price : "$289/day",
        class: "Executive car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
        title: "Pontiac Sunfire",
        price : "$349/day",
        class: "Compact"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
        title: "Jaguar X-Type",
        price : "$129/day",
        class: "Compact executive car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg",
        title: "Volkswagen Phaeton",
        price : "$69/day",
        class: "Full-size luxury car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pontiac_G6.jpg/400px-Pontiac_G6.jpg",
        title: "Pontiac G6",
        price : "$79/day",
        class: "Midsize"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ford500a.JPG/400px-Ford500a.JPG",
        title: "Ford Five Hundred",
        price : "$399/day",
        class: "Full-size"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/PontiacSolstice.jpg/400px-PontiacSolstice.jpg",
        title: "Pontiac Solstice",
        price : "$499/day",
        class: "Roadster, coupe"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fiat_tipo_f.jpg/400px-Fiat_tipo_f.jpg",
        title: "Fiat Tipo",
        price : "$149/day",
        class: "Small family car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1985-89_Plymouth_Reliant_K_LE.png/400px-1985-89_Plymouth_Reliant_K_LE.png",
        title: "Plymouth Reliant",
        price : "$249/day",
        class: "Mid-size"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/1978_chevette.JPG/400px-1978_chevette.JPG",
        title: "Chevrolet Chevette",
        price : "$499/day",
        class: "Subcompact"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg/400px-Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg",
        price : "$399/day",
        title: "Mazda MX-3",
        class: "Small family car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chevrolet_Corsica_1994.jpg/400px-Chevrolet_Corsica_1994.jpg",
        title: "Chevrolet Corsica",
        price : "$109/day",
        class: "Compact car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1992_MX3_V6_24V.jpg/400px-1992_MX3_V6_24V.jpg",
        title: "Mazda MX-3",
        price : "$199/day",
        class: "Sport compact"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg/400px-2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg",
        title: "TVR Tuscan Speed Six",
        price : "$89/day",
        class: "Sports car"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
        title: "Porsche Cayenne",
        price : "$799/day",
        class : "Mid-size luxury crossover SUV"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
        title: "Vauxhall Chevette",
        price : "$199/day",
        class: "Supermini"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
        title: "Ford Crown Victoria",
        price : "$649/day",
        class: "Full-size Ford"
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
        title: "Plymouth Superbird",
        price : "$359/day",
        class: "Muscle car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
        title: "Saab 9000",
        price : "$289/day",
        class: "Executive car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
        title: "Pontiac Sunfire",
        price : "$349/day",
        class: "Compact"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
        title: "Jaguar X-Type",
        price : "$129/day",
        class: "Compact executive car"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg",
        title: "Volkswagen Phaeton",
        price : "$69/day",
        class: "Full-size luxury car"
    },
];
export default carsData;