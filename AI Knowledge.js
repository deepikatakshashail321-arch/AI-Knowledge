use KnowledgeDB

db.documents.insertMany([
  {
    title: "Leave Policy",
    category: "HR",
    content: "Employees can apply for annual leave."
  },
  {
    title: "Security Policy",
    category: "IT",
    content: "Employees must protect company data."
  },
  {
    title: "Attendance Policy",
    category: "HR",
    content: "Employees must maintain regular attendance."
  }
])

// Display all documents
db.documents.find()

// Search documents by category
db.documents.find({ category: "HR" })

// Search document titles
db.documents.find({
  title: { $regex: "Policy", $options: "i" }
})

// Create an index for faster searching
db.documents.createIndex({ title: 1, category: 1 })

// Update a document
db.documents.updateOne(
  { title: "Leave Policy" },
  { $set: { content: "Employees can apply for leave according to company rules." } }
)