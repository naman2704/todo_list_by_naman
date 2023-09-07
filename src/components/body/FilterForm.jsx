export default function FilterForm() {
    return (
        <form id="filter_form">
            <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="search_bar" class="form-control" />
                    <label class="form-label" for="search_bar">Search</label>
                </div>
                <button type="button" class="btn btn-primary" id="search">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <a class="dropdown-item" href="#">4</a>
                    <a class="dropdown-item" href="#">5</a>
                    <a class="dropdown-item" href="#">6</a>
                    <a class="dropdown-item" href="#">7</a>
                    <a class="dropdown-item" href="#">8</a>
                    <a class="dropdown-item" href="#">9</a>
                    <a class="dropdown-item" href="#">10</a>
                </div>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="show_completed_task" />
                <label class="form-check-label" for="show_completed_task">
                    completed
                </label>
            </div>
        </form>
    );
}