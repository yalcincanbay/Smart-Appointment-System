// POST /api/appointments
// Bu kod randevu oluşturma işlemini karşılar
exports.createAppointment = async (req, res) => {
    try {
        const { patientId, doctorId, time } = req.body;
        if(!patientId || !doctorId) {
            return res.status(400).json({ error: "Eksik bilgi." });
        }
        // İş mantığı katmanına gönder
        return res.status(201).json({ 
            message: "Randevu başarıyla oluşturuldu",
            id: Math.floor(Math.random() * 1000)
        });
    } catch (error) {
        return res.status(500).json({ error: "Sunucu hatası" });
    }
};
