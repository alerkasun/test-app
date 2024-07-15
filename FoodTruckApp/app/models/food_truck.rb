class FoodTruck < ApplicationRecord
  has_many :reviews, dependent: :destroy
  attr_accessor :average_rating
end
