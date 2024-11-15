class CreateMenus < ActiveRecord::Migration[7.1]
  def change
    create_table :menus do |t|
      t.string :title
      t.bigint :price

      t.timestamps
    end
  end
end
