class Menu < ApplicationRecord
  attr_accessor :title, :price

  validates_presence_of :title, :price

  validates_numericality_of :price, greater_than_or_equal_to: 1
  validates_length_of :title, minimum: 3
end
