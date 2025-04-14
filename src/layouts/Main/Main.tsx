import Card from "@/components/Card/Card";
import useFetchPosts from "@/hooks/fetchPosts";

function Main() {
  const { data, loading, error } = useFetchPosts();

  console.log(data, loading, error);

  return (
    <div className="flex justify-center">
      <div className="">
        {data?.map((post) => (
          <Card title={post.title} body={post.body} image={post.image} />
        ))}
      </div>
    </div>
  );
}

export default Main;
