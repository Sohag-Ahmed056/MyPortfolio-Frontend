"use client";

import { Page, Text, View, Document, StyleSheet, pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const styles = StyleSheet.create({
  page: { backgroundColor: "#fff", padding: 35, fontSize: 11, fontFamily: "Helvetica" },
  header: { textAlign: "center", marginBottom: 15 },
  name: { fontSize: 20, fontWeight: "bold", color: "#1E3A8A" },
  contact: { fontSize: 11, color: "#374151" },
  section: { marginBottom: 12 },
  sectionTitle: { fontSize: 14, fontWeight: "bold", color: "#111827", marginBottom: 5 },
  text: { fontSize: 11, color: "#111827", marginBottom: 2 },
  listItem: { marginLeft: 10, fontSize: 11 },
});

export default function ResumePDF({ data }: { data: any }) {
  const handleDownload = async () => {
    const doc = (
      <Document>
        <Page style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.contact}>
              {data.email} | {data.phone} | {data.github}
            </Text>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            {data.skills.map((s: string, i: number) => (
              <Text key={i} style={styles.text}>
                • {s}
              </Text>
            ))}
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu: any, i: number) => (
              <View key={i}>
                <Text style={styles.text}>{edu.degree} - {edu.institution}</Text>
                <Text style={styles.text}>Year: {edu.year} | GPA: {edu.grade}</Text>
              </View>
            ))}
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {data.experience.map((exp: any, i: number) => (
              <View key={i}>
                <Text style={styles.text}>{exp.company} - {exp.position} ({exp.duration})</Text>
                <Text style={styles.text}>Responsibilities: {exp.responsibilities}</Text>
              </View>
            ))}
          </View>

          {/* Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.projects.map((p: any, i: number) => (
              <View key={i}>
                <Text style={styles.text}>{p.name} ({p.year})</Text>
                <Text style={styles.text}>{p.description}</Text>
                <Text style={styles.text}>
                  Technologies: {p.technologies.join(", ")}
                </Text>
              </View>
            ))}
          </View>

          {/* Certifications */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {data.certifications.map((cert: any, i: number) => (
              <Text key={i} style={styles.text}>
                {cert.name} - {cert.issuer} ({cert.year})
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    );

    const blob = await pdf(doc).toBlob();
    saveAs(blob, `${data.name.replace(" ", "_")}_Resume.pdf`);
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Download Your Resume
    </button>
  );
}
