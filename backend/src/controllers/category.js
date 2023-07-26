import Category from "../models/category";

const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    return res.json({
      message: "Danh sach san pham",
      category,
    });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

export { getAllCategory };
