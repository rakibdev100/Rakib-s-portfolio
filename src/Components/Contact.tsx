import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [shakeField, setShakeField] = useState({ email: false, phone: false, password: false });

    const togglePassword = () => setShowPassword(prev => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const password = e.target.password.value;

        const newShake = { email: false, phone: false, password: false };
        let hasError = false;

        if (!email) { newShake.email = true; hasError = true; }
        if (!phone) { newShake.phone = true; hasError = true; }
        if (!password || password.length < 8) { newShake.password = true; hasError = true; }

        if (hasError) {
            setShakeField(newShake);
            setTimeout(() => setShakeField({ email: false, phone: false, password: false }), 500);
            return;
        }

        const formData = { email, phone, password };
        console.log("Form submitted:", formData);
        document.getElementById("resultArea").textContent = "Form submitted! Check console.";
    };

    const handleReset = () => {
        document.getElementById("signupForm").reset();
        document.getElementById("resultArea").textContent = "";
    };

    const shakeVariant = {
        shake: { x: [0, -5, 5, -5, 5, 0], transition: { duration: 0.4 } },
        initial: { x: 0 }
    };

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="card"
                role="region"
                aria-label="Registration form"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h1>Sign up</h1>
                <p className="lead">Email, Number & Password diye form — validation shoho.</p>

                <form id="signupForm" onSubmit={handleSubmit} noValidate>
                    <motion.div
                        className="field"
                        variants={shakeVariant}
                        animate={shakeField.email ? "shake" : "initial"}
                    >
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="example@mail.com"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailError" className="error" aria-live="polite"></div>
                        <div id="emailHelp" className="small">Valid email address lagbe (e.g. name@mail.com).</div>
                    </motion.div>

                    <motion.div
                        className="field"
                        variants={shakeVariant}
                        animate={shakeField.phone ? "shake" : "initial"}
                    >
                        <label htmlFor="phone">Phone number</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="numeric"
                            pattern="^\+?[0-9]{7,15}$"
                            required
                            placeholder="01XXXXXXXXX or +8801XXXXXXXXX"
                            aria-describedby="phoneHelp"
                        />
                        <div id="phoneError" className="error" aria-live="polite"></div>
                        <div id="phoneHelp" className="small">
                            Use numeric digits. Bangladesh example: 01XXXXXXXXX or with +880.
                        </div>
                    </motion.div>

                    <motion.div
                        className="field"
                        variants={shakeVariant}
                        animate={shakeField.password ? "shake" : "initial"}
                    >
                        <label htmlFor="password">Password</label>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                minLength="8"
                                required
                                placeholder="At least 8 characters"
                                aria-describedby="pwdHelp"
                            />
                            <button
                                type="button"
                                id="togglePwd"
                                className="toggle"
                                aria-pressed={showPassword}
                                onClick={togglePassword}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <div id="pwdError" className="error" aria-live="polite"></div>
                        <div id="pwdHelp" className="small">
                            Minimum 8 characters. Use letters and numbers for better security.
                        </div>
                    </motion.div>

                    <div className="actions">
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit
                        </motion.button>
                        <motion.button
                            type="button"
                            className="secondary"
                            onClick={handleReset}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Reset
                        </motion.button>
                    </div>
                </form>

                <div id="resultArea" aria-live="polite"></div>
            </motion.div>

            <p
                style={{
                    textAlign: "center",
                    marginTop: "14px",
                    color: "var(--muted)",
                    fontSize: "13px",
                }}
            >
                Form ta localy run korle data console e dekhte paben. Copy-paste kore use korun.
            </p>
        </motion.div>
    );
};

export default Contact;
