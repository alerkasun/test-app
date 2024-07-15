class CreateFoodTrucks < ActiveRecord::Migration[5.2]
  def change
    create_table :food_trucks do |t|
      t.string :name
      t.string :address
      t.string :food_items
      t.float :latitude
      t.float :longitude
      t.string :schedule
      t.string :dayshours
      t.string :facility_type

      t.timestamps
    end
  end
end
