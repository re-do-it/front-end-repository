import './FilterPosts.css'

function FilterPosts(props) {
    return (
        <div className='filter-posts container-fluid d-flex align-items-center p-3 gap-3'>
            <button className='hot btn'>Hot</button>
            <button className='new btn'>New</button>
            <button className='top btn'>Top</button>
        </div>
    );
}

export default FilterPosts;