class FoodTrucksController < ApplicationController
  def index
    food_trucks = FoodTruck.joins(:reviews)
                           .select("food_trucks.*, AVG(reviews.rating) as average_rating")
                           .group('food_trucks.id')

    if params[:min_rating].present?
      food_trucks = food_trucks.having('AVG(reviews.rating) >= ?', params[:min_rating].to_f)
    end

    if params[:keywords].present?
      food_trucks = food_trucks.where("food_items ILIKE ?", "%#{params[:keywords]}%")
    end


    render json: food_trucks.as_json(include: :reviews, methods: [:average_rating])
  end
end
