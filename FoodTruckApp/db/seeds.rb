require 'httparty'
require 'faker'

url = 'https://data.sfgov.org/resource/rqzj-sfat.json'
response = HTTParty.get(url)
food_trucks = response.parsed_response

food_trucks.each do |truck|
  food_truck = FoodTruck.create(
    name: truck['applicant'],
    address: truck['address'],
    food_items: truck['fooditems'],
    latitude: truck['latitude'],
    longitude: truck['longitude'],
    schedule: truck['schedule'],
    dayshours: truck['dayshours'],
    facility_type: truck['facilitytype'],
  )

  rand(1..10).times do
    Review.create(
      food_truck_id: food_truck.id,
      rating: rand(1..5),
      comment: Faker::Restaurant.review
    )
  end
end
