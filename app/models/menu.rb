class Menu < ApplicationRecord
  validates_presence_of :title, :price, :currency

  validates_numericality_of :price, greater_than_or_equal_to: 1
  validates_length_of :title, minimum: 3

  validates :currency, inclusion: { in: %w[EUR] }
end
