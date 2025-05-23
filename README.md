# BountyBoard

**BountyBoard** is a decentralized task management platform built on the Algorand blockchain. It enables users to post tasks (bounties) with associated rewards in Algorand tokens. Other users can claim these tasks, complete them, and receive the rewards—all managed securely through smart contracts.

---

## 🚀 Features

- **Decentralized Task Posting**: Users can create tasks specifying details like description, difficulty level, and reward amount.
- **Secure Task Claiming**: Other users can claim available tasks, ensuring that each task is assigned to a single solver at a time.
- **Smart Contract Integration**: All task-related transactions are handled via Algorand smart contracts, ensuring transparency and security.
- **Reward Distribution**: Upon task completion and approval, the specified reward is automatically transferred to the solver's wallet.

---

## 🛠️ How It Works

1. **Task Creation**:
   - A user (task creator) posts a new task by providing:
     - Task description
     - Difficulty level
     - Reward amount (in Algorand tokens)
   - The task details are stored on the blockchain via a smart contract.

2. **Task Claiming**:
   - Another user (task solver) browses available tasks and claims one.
   - The smart contract updates the task status to indicate it's claimed and records the solver's address.

3. **Task Completion**:
   - The solver completes the task and submits proof of completion.
   - The task creator reviews the submission.
   - If approved, the smart contract releases the reward to the solver's wallet.

---

## 📁 Project Structure

```plaintext
BountyBoard/
├── .algokit/                 # Algorand project configuration
├── .vscode/                  # VSCode settings
├── Backend/                  # Smart contracts and backend logic
├── projects/                 # Frontend or additional project components
├── .algokit.toml             # AlgoKit configuration file
├── .editorconfig             # Editor configuration
├── .gitattributes            # Git attributes
├── .gitignore                # Git ignore file
├── BountyBoard.code-workspace# VSCode workspace configuration
├── LICENSE                   # Project license (MIT)
└── README.md                 # Project documentation
```

---

## 🔧 Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/abhisathvik/BountyBoard.git
   cd BountyBoard
   ```

2. **Install Dependencies**:
   - Ensure you have [AlgoKit](https://github.com/algorandfoundation/algokit-cli) installed.
   - Install other necessary dependencies as specified in the project files.

3. **Configure Environment**:
   - Set up your Algorand wallet and obtain testnet tokens.
   - Configure environment variables as needed for the project.

4. **Deploy Smart Contracts**:
   ```bash
   algokit project run deploy
   ```

5. **Run the Application**:
   ```bash
   algokit project run start
   ```
---

## 👤 Author

- **Name**: Abhi Sathvik Reddy
- **GitHub**: [@abhisathvik](https://github.com/abhisathvik)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---

## 📬 Contact

For any inquiries or feedback, please open an issue on the [GitHub repository](https://github.com/abhisathvik/BountyBoard/issues).
"""
