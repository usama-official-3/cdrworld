import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
function Admin() {

  const [page, setPage] = useState("post");

  const [title, setTitle] = useState("");
  const [type, setType] = useState("free");
  const [image, setImage] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [imageDetail, setImageDetail] = useState("");

  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [products, setProducts] = useState([]);
// console.log(products)

  // console.log("product",products)
  const [editId, setEditId] = useState(null);
  const BASE_URL = "https://cdr-backend-murex.vercel.app";

  // LOAD DRIVE DATA
  useEffect(() => {

    fetch(`${BASE_URL}/api/drive/images`)
      .then(res => res.json())
      .then(data => setImages(data.files));

    fetch(`${BASE_URL}/api/drive/files`)
      .then(res => res.json())
      .then(data => setFiles(data.files));

  }, []);

  // LOAD PRODUCTS
  const loadProducts = () => {
    fetch(`${BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

     // VALIDATION
  if (!title.trim()) {
    toast.error("Please enter a product title");
    return;
  }

  if (!image) {
    toast.error("Please select an image");
    return;
  }

  if (!downloadLink) {
    toast.error("Please select a download file");
    return;
  }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser || !savedUser.token) {
      toast.error("Login required");
      return;
    }

    const token = savedUser.token;

    const data = { title, type, image, downloadLink, imageDetail };

    const url = editId
      ? `${BASE_URL}/api/products/${editId}`
      : `${BASE_URL}/api/products`;

    const method = editId ? "PUT" : "POST";

    try {

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to save product");
      setTitle("");
      setType("free");
      setImage("");
      setDownloadLink("");
      setImageDetail("");
      setEditId(null);

      loadProducts();
      setPage("manage");
      toast.success(editId ? "Product updated!" : "Product added!");

    } catch (err) {
      toast.error(err.message);
    }




  };

  // DELETE
  const handleDelete = async (id) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const token = savedUser.token;

    if (!window.confirm("Delete this product?")) return;

    try {
      const res = await fetch(`${BASE_URL}/api/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) throw new Error("Failed to delete product");
      loadProducts();
      toast.success("Product deleted!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  // EDIT
  const handleEdit = (p) => {

    setTitle(p.title);
    setType(p.type);
    setImage(p.image);
    setDownloadLink(p.downloadLink);
    setImageDetail(p.imageDetail);
    setEditId(p._id);

    setPage("post");
  };

  //Download
  // const handleDownload = (link) => {
  //   navigator.clipboard.writeText(link);
  //   toast.success("Download link copied!");
  // };
 // Copy download link
const handleDownload = async (link) => {
  try {
    await navigator.clipboard.writeText(link);
    toast.success("Download link copied!");
  } catch (err) {
    toast.error("Failed to copy link");
  }
};

  return (

    
    <div style={{
      background: "#f3f4f6",
      minHeight: "100vh",
      padding: "20px"
    }}>
      {/* Toaster container */}
      <Toaster position="top-right" reverseOrder={false} />

      <Link

  to="/"
  className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 mb-6 font-semibold"
  style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}
>
  <ArrowLeft size={18} />
  Back to Home
</Link>

      {/* HEADER */}

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "10px",
        marginBottom: "20px"
      }}>

        <h1 style={{ fontSize: "26px", fontWeight: "700" }}>Admin Dashboard</h1>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

          <button
            onClick={() => setPage("post")}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "8px",
              background: page === "post" ? "#2563eb" : "#e5e7eb",
              color: page === "post" ? "#fff" : "#000",
              cursor: "pointer"
            }}
          >
            Add Product
          </button>

          <button
            onClick={() => setPage("manage")}
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "8px",
              background: page === "manage" ? "#2563eb" : "#e5e7eb",
              color: page === "manage" ? "#fff" : "#000",
              cursor: "pointer"
            }}
          >
            Manage Products
          </button>

        </div>

      </div>

      {/* ADD PRODUCT */}

      {page === "post" && (

        <div style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
        }}>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "15px"
            }}>

              <input
                placeholder="Product Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}
              />

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{ padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}
              >
                <option value="free">Free</option>
                <option value="premium">Premium</option>
              </select>

            </div>

            {/* IMAGE GRID */}

            <div>

              <h3>Select Image</h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))",
                gap: "10px",
                maxHeight: "250px",
                overflow: "auto"
              }}>

                {images?.map(img => (
                  <img
                    key={img.id}
                    alt={img.title || "product image"}
                    src={`${BASE_URL}/api/drive/image/${img.id}?w=400&q=70`}
                    onClick={() => setImage(`${BASE_URL}/api/drive/image/${img.id}`)}
                    style={{
                      width: "100%",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      cursor: "pointer",
                      border: image.includes(img.id)
                        ? "3px solid #22c55e"
                        : "2px solid #eee"
                    }}
                  />
                ))}

              </div>

            </div>

            {/* FILE GRID */}

            <div>

              <h3>Select Download File</h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: "10px"
              }}>

                {files?.map(file => (
                  <div
                    key={file.id}
                    alt={file.title || "product image"}
                    // onClick={() => setDownloadLink(`https://drive.google.com/uc?export=download&id=${file.id}`)}
                    onClick={() => setDownloadLink(`${BASE_URL}/api/drive/download/${file.id}?name=${encodeURIComponent(file.name)}`)}
                    style={{
                      padding: "10px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      border: downloadLink.includes(file.id)
                        ? "2px solid #22c55e"
                        : "1px solid #ddd",
                      background: "#fafafa"
                    }}
                  >
                    📄 {file.name}
                  </div>
                ))}

              </div>

            </div>

            <textarea
              placeholder="Image Detail"
              value={imageDetail}
              onChange={(e) => setImageDetail(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                minHeight: "120px"
              }}
            />

            <button
              type="submit"
              style={{
                padding: "14px",
                background: "#2563eb",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              {editId ? "Update Product" : "Save Product"}
            </button>

          </form>

        </div>
      )}

      {/* MANAGE PRODUCTS */}
      {page === "manage" && (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            fontFamily: "system-ui",
          }}
        >
          {/* HEADER */}
          <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "20px" }}>
            Manage Products
          </h2>

          {/* TABLE FOR DESKTOP */}
          <div className="desktopTable">
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <thead>
                <tr style={{ background: "#f9fafb" }}>
                  <th style={{ padding: "12px", textAlign: "left", width: "80px" }}>Image</th>
                  <th style={{ textAlign: "left" }}>Title</th>
                  <th style={{ textAlign: "center", width: "120px" }}>Type</th>
                  <th style={{ textAlign: "center", minWidth: "250px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p._id} style={{ borderTop: "1px solid #eee" }}>
                    <td style={{ padding: "10px" }}>
                      <img
                        src={`${p.image}?w=400&q=70`}
                        alt={p.title || "product image"}
                        style={{ width: "70px", height: "50px", objectFit: "cover", borderRadius: "6px" }}
                      />
                    </td>
                    <td style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {p.title}
                    </td>
                    <td style={{ textAlign: "center" }}>{p.type}</td>
                    <td style={{ textAlign: "center" }}>
                      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "6px" }}>
                        <button className="btn-edit" onClick={() => handleEdit(p)}>Edit</button>
                        <button className="btn-download" onClick={() => handleDownload(p.downloadLink)}>Download</button>
                        <button className="btn-delete" onClick={() => handleDelete(p._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE / TABLET CARDS */}
          <div className="mobileCards">
            {products?.map((p) => (
              <div key={p._id} className="card">
                <img src={p.image} alt={p.title || "product image"} className="card-image" />
                <div className="card-body">
                  <h4 className="card-title">{p.title}</h4>
                  <p className="card-type">Type: {p.type}</p>
                  <div className="card-actions">
                    <button className="btn-edit" onClick={() => handleEdit(p)}>Edit</button>
                    <button className="btn-download" onClick={() => handleDownload(p.downloadLink)}>Download</button>
                    <button className="btn-delete" onClick={() => handleDelete(p._id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style>
            {`
        /* DESKTOP */
        .desktopTable { display: block; overflow-x: auto; }
        .mobileCards { display: none; }

        /* BUTTONS */
        .btn-edit { padding: 6px 12px; background: #f59e0b; border: none; color: #fff; border-radius: 6px; cursor: pointer; }
        .btn-download { padding: 6px 12px; background: #22c55e; border: none; color: #fff; border-radius: 6px; cursor: pointer; }
        .btn-delete { padding: 6px 12px; background: #ef4444; border: none; color: #fff; border-radius: 6px; cursor: pointer; }

        /* MOBILE / TABLET */
        @media (max-width: 1024px) {
          .desktopTable { display: none; }
          .mobileCards { display: flex; flex-direction: column; gap: 15px; }

          .card {
            border: 1px solid #eee;
            border-radius: 12px;
            padding: 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 15px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }
          .card-image { width: 120px; height: 80px; object-fit: cover; border-radius: 8px; }
          .card-body { flex: 1; display: flex; flex-direction: column; gap: 6px; }
          .card-actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
          .card-title { font-weight: 600; margin: 0; font-size: 16px; }
          .card-type { margin: 0; color: #666; font-size: 14px; }
        }

        /* MOBILE XS */
        @media (max-width: 440px) {
          .card { flex-direction: column; align-items: flex-start; }
          .card-image { width: 100%; height: 150px; }
        }
      `}
          </style>
        </div>
      )}
    </div>
  );
}

export default Admin;