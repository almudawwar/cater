# frozen_string_literal: true

RSpec.describe Menu, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:price) }

  it { should validate_numericality_of(:price).is_greater_than_or_equal_to(1) }

  it { should validate_length_of(:name).is_at_least(3) }
end
