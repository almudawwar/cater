class Menu < ApplicationRecord
  attr_accessor :name, :price

  validates_presence_of :name, :price

  validates_numericality_of :price, greater_than_or_equal_to: 1
  validates_length_of :name, minimum: 3
end
