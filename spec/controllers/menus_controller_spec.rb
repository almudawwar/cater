# frozen_string_literal: true

RSpec.describe Api::V1::MenusController, type: :controller do
  describe 'GET #index' do
    it 'returns :ok response' do
      get :index
      expect(response).to have_http_status(:ok)
    end
  end
  
  describe 'GET #show' do
    context 'with a valid id' do
      let(:menu) { Fabricate(:menu) }

      it 'returns :ok' do
        get :show, params: { id: menu.id }
        expect(response).to have_http_status(:ok)
      end
    end

    context 'with an invalid id' do
      it 'returns :not_found' do
        get :show, params: { id: 4 }
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
