config = {}


config.cars = {
    [1] = {
        ["car_name"] = "Asea",
        ["car_price"] = 150,
    },
    [2] = {
        ["car_name"] = "Asbo",
        ["car_price"] = 300,
    },
    [3] = {
        ["car_name"] = "Buffalo",
        ["car_price"] = 800,
    },
    [4] = {
        ["car_name"] = "Pfister811",
        ["car_price"] = 1500,
    },
    [5] = {
        ["car_name"] = "Baller4",
        ["car_price"] = 7000,
    },
    [6] = {
        ["car_name"] = "T20",
        ["car_price"] = 10000,
    },
    [7] = {
        ["car_name"] = "Blazer",
        ["car_price"] = 1000,
    },
    [8] = {
        ["car_name"] = "Bf400",
        ["car_price"] = 1200,
    },
    [9] = {
        ["car_name"] = "Everon",
        ["car_price"] = 5000,
    },
}


config.PedList = {                                              -- Peds that will be spawned in (if you change a ped model here you need to also change the ped model in client/addons.lua qb-target exports)
	{
		model = "s_m_m_movprem_01",                            
		coords = vector3(-1026.63, -2729.91, 12.76),               
		heading = 333.5,
		gender = "male",
        scenario = "WORLD_HUMAN_CLIPBOARD"
	},
}


config.CarSpawnLocation = {
    airport	= vector4(-1024.2, -2727.63, 13.72, 239.34),     
}
config.PlayerReturnLocation = {
    airport 	= vector4(-1026.42, -2727.48, 13.67, 239.13),       
}