local QBCore = exports['qb-core']:GetCoreObject()

RegisterNetEvent("zmrentacar:checkMoney")
AddEventHandler("zmrentacar:checkMoney", function(name,number)
    local src = source
    local xPlayer = QBCore.Functions.GetPlayer(src)

    local car_price = config.cars[number].car_price
    local car_name = name

    local bank = xPlayer.PlayerData.money.bank

    if bank >= car_price then
        xPlayer.Functions.RemoveMoney('bank', car_price, "rent-car")
    	TriggerClientEvent('QBCore:Notify', src, "Car has been rented for $"..car_price, "success")
        TriggerClientEvent('zm-rentacar:rentcar',source, car_name)
    else
        TriggerClientEvent('QBCore:Notify', src, "You dont have enough money..", "error")
    end
    

end)
