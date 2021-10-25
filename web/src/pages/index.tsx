import { withUrqlClient } from "next-urql";
import { Container } from "../components/Container";
import Navbar from "../components/Navbar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <Container>
      <Navbar />
      <div>Hello World</div>
      <br />
      {!data ? null : data.posts.map((p) => <div key={p.id}>{p.title}</div>)}
    </Container>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
