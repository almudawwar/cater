# frozen_string_literal: true

RSpec.describe MenuSearchQuery do
  subject { described_class.call(filters) }

  describe '#call' do
    context 'without filters' do
      let(:filters) { {} }
      let!(:menus) { Fabricate.times(10, :menu) }

      it 'returns all menus paginated' do
        expect(subject).to match_array(menus)
      end
    end

    context 'with sort_direction asc' do
      let(:filters) { { sort_direction: :asc } }
      let!(:menus) { Fabricate.times(10, :menu) }

      it 'returns all menus sorted asc' do
        expect(subject).to match_array(Menu.sorted_price(:asc))
      end
    end

    context 'with sort_direction desc' do
      let(:filters) { { sort_direction: :desc } }
      let!(:menus) { Fabricate.times(10, :menu) }

      it 'returns all menus sorted desc' do
        expect(subject).to match_array(Menu.sorted_price(:desc))
      end
    end

    context 'with page' do
      let(:filters) { { page: 2 } }
      let!(:menus) { Fabricate.times(20, :menu) }

      it 'returns menus from given page' do
        expect(subject).to match_array(menus.last(10))
      end
    end

    context 'with search_term' do
      let(:filters) { { search_term: 'big' } }
      let!(:menu1) { Fabricate(:menu, title: 'Big Menu') }
      let!(:menu2) { Fabricate(:menu, title: 'Small Menu') }

      it 'returns menus with name including term' do
        expect(subject).to match_array([menu1])
      end
    end

    context 'with multiple filters' do
      let(:filters) { { search_term: 'big', page: 1, sort_direction: :asc } }
      let!(:menu1) { Fabricate(:menu, title: 'Big Menu', price: 40) }
      let!(:menu2) { Fabricate(:menu, title: 'Small Menu') }
      let!(:menu3) { Fabricate(:menu, title: 'Big Menu 2', price: 30) }

      it 'returns menus with name including term' do
        expect(subject).to match_array([menu3, menu1])
      end
    end

    context 'without any matches' do
      let(:filters) { { search_term: 'Daily', page: 1, sort_direction: :asc } }
      let!(:menu1) { Fabricate(:menu, title: 'Big Menu', price: 40) }

      it 'returns an empty array' do
        expect(subject).to match_array([])
      end
    end
  end
end
