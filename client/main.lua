local QBCore = exports['qb-core']:GetCoreObject()
local display = false
local peds = {} 
local car_names = {}
local car_prices = {}

for i = 1, #config.cars, 1 do
	car_names[i] = config.cars[i].car_name
end

for i = 1, #config.cars, 1 do
	car_prices[i] = config.cars[i].car_price
end



RegisterCommand("rentcar", function(source)
    SetDisplay(not display,car_names,car_prices)
end)

RegisterNUICallback("exit", function(data)
    SetDisplay(display)
end)

RegisterNUICallback("returncar", function(data)
    TriggerEvent("zmrentcar:returncar",source)
end)

RegisterNUICallback("rentcar", function(data)
    TriggerServerEvent("zmrentacar:checkMoney",data.car_name,data.number)
end)


RegisterNetEvent('meeth-rantcar:opennui', function(data)
    SetDisplay(not display,car_names,car_prices)
end)


RegisterNetEvent('zm-rentacar:rentcar', function(carname)

    QBCore.Functions.SpawnVehicle(carname, function(car)
        SetVehicleNumberPlateText(car, "Rent-a-car")
        exports['LegacyFuel']:SetFuel(car, 100.0)
        SetEntityHeading(car, config.CarSpawnLocation.airport.w)
        TaskWarpPedIntoVehicle(PlayerPedId(), car, -1)
        TriggerEvent("vehiclekeys:client:SetOwner", GetVehicleNumberPlateText(car))
        SetVehicleEngineOn(car, true, true)
    end, config.CarSpawnLocation.airport, true) 

    SetDisplay(display)
end)


RegisterNetEvent('zmrentcar:returncar', function()
	local ped = PlayerPedId()

	if IsPedInAnyVehicle(ped) then
			local car = GetVehiclePedIsIn(ped,true) 
			QBCore.Functions.DeleteVehicle(car)
			SetEntityCoords(ped, config.PlayerReturnLocation.airport.x, config.PlayerReturnLocation.airport.y, config.PlayerReturnLocation.airport.z, 0, 0, 0, false) 
			SetEntityHeading(ped, config.PlayerReturnLocation.airport.y)
            SetDisplay(display)
    else
        SetDisplay(display)
	end
end)



function SetDisplay(bool,car_names,car_prices)
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        car_names = car_names,
        car_prices = car_prices,
        status = bool,
    })
end



Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)
        DisableControlAction(0, 1, display) -- LookLeftRight
        DisableControlAction(0, 2, display) -- LookUpDown
        DisableControlAction(0, 142, display) -- MeleeAttackAlternate
        DisableControlAction(0, 18, display) -- Enter
        DisableControlAction(0, 322, display) -- ESC
        DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
    end
end)




---------PEDS


exports["qb-target"]:AddTargetModel(`s_m_m_movprem_01`, {
    options = {
        {
            event = "meeth-rantcar:opennui",
            icon = "fas fa-car",
            label = "Car Rental"
        }
    },
    distance = 7.0
})



--------------- THREADS

CreateThread(function()
	while true do
		Wait(500)
		for k = 1, #config.PedList, 1 do
			v = config.PedList[k]
			local playerCoords = GetEntityCoords(PlayerPedId())
			local dist = #(playerCoords - v.coords)

			if dist < 50.0 and not peds[k] then
				local ped = nearPed(v.model, v.coords, v.heading, v.gender, v.animDict, v.animName, v.scenario)
				peds[k] = {ped = ped}
			end

			if dist >= 50.0 and peds[k] then
				for i = 255, 0, -51 do
					Wait(50)
					SetEntityAlpha(peds[k].ped, i, false)
				end
				DeletePed(peds[k].ped)
				peds[k] = nil
			end
		end
	end
end)

nearPed = function(model, coords, heading, gender, animDict, animName, scenario)
	RequestModel(GetHashKey(model))
	while not HasModelLoaded(GetHashKey(model)) do
		Wait(1)
	end

	if gender == 'male' then
		genderNum = 4
	elseif gender == 'female' then 
		genderNum = 5
	else
		print("No gender provided! Check your configuration!")
	end	

	ped = CreatePed(genderNum, GetHashKey(v.model), coords, heading, false, true)
	SetEntityAlpha(ped, 0, false)

	FreezeEntityPosition(ped, true)
	SetEntityInvincible(ped, true)
	SetBlockingOfNonTemporaryEvents(ped, true)
	if animDict and animName then
		RequestAnimDict(animDict)
		while not HasAnimDictLoaded(animDict) do
			Wait(1)
		end
		TaskPlayAnim(ped, animDict, animName, 8.0, 0, -1, 1, 0, 0, 0)
	end
	if scenario then
		TaskStartScenarioInPlace(ped, scenario, 0, true) 
	end
	for i = 0, 255, 51 do
		Wait(50)
		SetEntityAlpha(ped, i, false)
	end

	return ped
end


Citizen.CreateThread(function()
	rentairport = AddBlipForCoord(config.CarSpawnLocation.airport)
	SetBlipSprite(rentairport, 523)
	SetBlipDisplay(rentairport, 4)
	SetBlipScale(rentairport, 0.7)
	SetBlipColour(rentairport, 31)
    SetBlipAsShortRange(rentairport, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentSubstringPlayerName("Rent A Car")
    EndTextCommandSetBlipName(rentairport)
end)