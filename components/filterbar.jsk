import "./FilterBar.css";

function FilterBar({
  sport,
  district,
  category,
  onSportChange,
  onDistrictChange,
  onCategoryChange,
}) {
  return (
    <div className="filter-bar">

      <select value={sport} onChange={onSportChange}>
        <option value="">All Sports</option>
        <option>Football</option>
        <option>Cricket</option>
        <option>Athletics</option>
        <option>Basketball</option>
        <option>Volleyball</option>
        <option>Swimming</option>
        <option>Badminton</option>
        <option>Table Tennis</option>
        <option>Karate</option>
        <option>Taekwondo</option>
      </select>

      <select value={district} onChange={onDistrictChange}>
        <option value="">All Districts</option>
        <option>Dhaka</option>
        <option>Chattogram</option>
        <option>Rajshahi</option>
        <option>Khulna</option>
        <option>Barishal</option>
        <option>Sylhet</option>
        <option>Rangpur</option>
        <option>Mymensingh</option>
      </select>

      <select value={category} onChange={onCategoryChange}>
        <option value="">All Categories</option>
        <option>Athletes</option>
        <option>Coaches</option>
        <option>Academies</option>
        <option>Competitions</option>
        <option>Scholarships</option>
        <option>Trials</option>
        <option>Training Camps</option>
      </select>

    </div>
  );
}

export default FilterBar;
