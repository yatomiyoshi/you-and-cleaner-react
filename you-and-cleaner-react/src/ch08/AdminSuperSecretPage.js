// import { useEffect } from "react";

const AdminSuperSecretPage = () => {
  const { isAdmin } = useUserInfoContext();

  // useEffectに記載した処理は、レンダリング後に実行される
  // （それにより、コンポーネントをReact外部のシステムと同期させることができる）
  // そのため、以下のコードの場合、「管理者用個人情報」がレンダリングされた直後に、
  // リダイレクトされることになるため、無駄なレンダリングが行われる
  // かつセキュリティ的にも問題がある
  // useEffect(() => {
  //   if (!isAdmin) {
  //     redirect("/login");
  //   }
  // }, [isAdmin]);

  // 以下のようにuseEffectは必要ない
  if (!isAdmin) {
    return redirect("/login");
  }

  return <p>管理者用個人情報</p>;
};
