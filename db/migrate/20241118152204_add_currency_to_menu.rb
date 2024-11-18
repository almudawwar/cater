class AddCurrencyToMenu < ActiveRecord::Migration[7.1]
  def change
    add_column :menus, :currency, :string, null: false, default: 'EUR'
  end
end
