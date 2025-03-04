export default function ProfileCard({ name = "Kenny", age, location }) {
  return (
    <div>
      <h3>{name}</h3>
      {age ? <p>{age}</p> : <p>Age not provided</p>}
      {location ? <p>{location}</p> : <p>Location not provided</p>}
    </div>
  );
}
