Setup Python in VScode
CachyOS Arch Linux

```bash
ollama serve
```

VScode:
Ctrl + Shift + P      Command Palette

Python: Select Interpreter

// open notebook; click in top right corner or ...
Notebook: Select Kernel



---

// Gemerated by AI in VScode

Optimized tool selectionI'll create a short plan, add workspace settings, then register the venv kernel.

Created 3 todos

Now I'll create `.vscode/settings.json` to set the workspace interpreter to the venv.

Apply Patch

I'll write the workspace settings file now.

Generating patch (11 lines) in [](file:///home/fi/WORKSPACES/VScode/Astro-Homepage/.vscode/settings.json)


```

```
Next I'll install `ipykernel` into the venv and register a kernel for notebooks. I'll run pip and ipykernel commands in the workspace.

Ran terminal command: ./scripts/.venv/bin/python -m pip install --upgrade pip ipykernel && ./scripts/.venv/bin/python -m ipykernel install --user --name astro_homepage_scripts_venv --display-name "Python (scripts/.venv)"

Updating the plan to mark steps complete.

Completed: *Add workspace VS Code settings to use scripts/.venv* (1/3)

**Summary**

- **Workspace settings:** Added /.vscode/settings.json to make .venv the default interpreter.
- **Jupyter kernel:** Installed `ipykernel` into the venv and registered kernel name `astro_homepage_scripts_venv` (display name: "Python (scripts/.venv)").
- **Next step (in VS Code):** Select the interpreter and notebook kernel (one-time).

**Commands I ran**
```bash
./scripts/.venv/bin/python -m pip install --upgrade pip ipykernel
./scripts/.venv/bin/python -m ipykernel install --user --name astro_homepage_scripts_venv --display-name "Python (scripts/.venv)"
```

**How to verify / what to do in VS Code**
- Open Command Palette (Ctrl+Shift+P):
  - Run **Python: Select Interpreter** → choose the interpreter at python.
  - Open a notebook, then run **Notebook: Select Kernel** or click the kernel picker in the top-right and choose "Python (scripts/.venv)".
- If VS Code doesn't pick it up immediately, reload the window.

Do you want me to also:
- Commit the new settings file, or
- Create a workspace-local kernel spec instead of a user-level kernel?

Made changes.

---

