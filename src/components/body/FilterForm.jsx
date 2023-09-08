export default function FilterForm() {
    return (
        <form id="filter_form">
            <div class="input-group" style={{
                width: "100%",
                margin: "0px auto"
            }}>
                <div class="form-outline serach_form">
                    <input type="search" id="search_bar" class="form-control" placeholder="Search..."/>
                </div>
                <button type="button" class="btn btn-primary" id="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    </svg>
                </button>
            </div>
            <div className="other_filters clearfix" style={{
                width: "100%",
                margin: "10px auto"
            }}>
                <div className="user_id_select_form filter clearfix">
                    <label htmlFor="user_id_select">Users</label>
                    {' '}
                    <select class="form-select" aria-label="Default select example" id="user_id_select">
                        <option selected value="all">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="todo_status_select_form filter clearfix">
                    <label htmlFor="todo_status_select">Todo Status</label>
                    {' '}
                    <select class="form-select" aria-label="Default select example" id="todo_status_select">
                        <option selected value="all">All</option>
                        <option value="1">Completed</option>
                        <option value="0">Pending</option>
                    </select>
                </div>
                {/* <div className="form-check filter" style={{
                    paddingTop: "5px",
                }}>
                    <input className="form-check-input" type="checkbox" value="" id="show_completed_task" />
                    <label className="form-check-label" htmlFor="show_completed_task">
                        completed
                    </label>
                </div> */}
            </div>
            
        </form>
    );
}