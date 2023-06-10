import { Card } from "../Card/Card";

interface IListProps {
  subCats: string[]
  maxPrice: number
  sort: string | null
  catId: string | undefined
}

export const List = ({ subCats, maxPrice, sort, catId }: IListProps) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
//       (item) => `&[filters][sub_categories][id][$eq]=${item}`
//     )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
//   );

  return (
    <div className="list">
      {/* {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)} */}
    </div>
  );
};
