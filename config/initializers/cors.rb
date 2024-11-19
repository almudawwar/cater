frontend_origins = [
  'http://127.0.0.1:5173',
  'http://localhost:5173'
]

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins frontend_origins

    resource '*',
             headers: :any,
             methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
