class MenuSearchQuery
  def initialize(scope = Menu.all)
    @scope = scope
  end

  def self.call(filters, scope = Menu.all)
    new(scope).call(filters)
  end

  def call(filters = {})
    @scope = sort_by_price(filters[:sort_direction])
    @scope = by_title(filters[:search_term])
    @scope = paginate(filters[:page])

    @scope
  end

  private

  def by_title(term)
    return @scope if term.blank?

    @scope.by_title(term)
  end

  def paginate(page = 0)
    @scope.page(page)
  end

  def sort_by_price(direction)
    return @scope if direction.blank?
    return @scope unless [:desc, :asc, 'asc', 'desc'].include?(direction)

    @scope.sorted_price(direction)
  end
end
