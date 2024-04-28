export const NumberInd = (data: number) => {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR"
  }).format(data | 0)
}