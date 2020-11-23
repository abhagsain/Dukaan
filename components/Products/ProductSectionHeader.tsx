import Link from "next/link";
import { SBadge, SProductSectionHeader } from "../../styles/StyledElements";

interface ProductSectionHeaderProps {
  category_name: string;
  product_count: number;
  category_id: number;
}
function ProductSectionHeader({
  category_name,
  product_count,
  category_id,
}: ProductSectionHeaderProps) {
  console.log(
    "🚀 ~ file: ProductSectionHeader.tsx ~ line 14 ~ category_id",
    category_id,
  );
  return (
    <SProductSectionHeader>
      <div>
        <h2>{category_name}</h2>
        <SBadge>{product_count}</SBadge>
      </div>
      <Link href={`/details/${category_id}`}>
        <a>See All</a>
      </Link>
    </SProductSectionHeader>
  );
}
export default ProductSectionHeader;
