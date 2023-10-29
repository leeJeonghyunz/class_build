import { useRouter } from "next/router";

export default function BoardPage() {
  const router = useRouter();

  return (
    <>
      <div>안녕하세요. 게시판상세 동적페이지입니다.</div>
      <div>게시글 아이디: {router.query.boardId}</div>
    </>
  );
}

export const getServerSideProps = () => {
  //만약 서버사이드 렌더링 페이지라면??=>out폴더 생성불가
  //                                   =>이런 경우 next.config.js에서 exportpathMaps로
};
