RSpec.describe Api::V1::MenusController, type: :controller do
  describe 'GET #index' do
    it 'returns :ok response' do
      get :index
      expect(response).to have_http_status(:ok)
    end
  end
  
  describe 'GET #show' do
    it 'returns :ok response' do
      get :show, params: { id: 4 }
      expect(response).to have_http_status(:ok)
    end
  end
end
