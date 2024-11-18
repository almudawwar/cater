# frozen_string_literal: true

RSpec.describe Menu, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:price) }
  it { should validate_presence_of(:currency) }

  it { should validate_numericality_of(:price).is_greater_than_or_equal_to(1) }

  it { should validate_length_of(:title).is_at_least(3) }
  it { should validate_inclusion_of(:currency).in_array(%w[EUR]) }
end
