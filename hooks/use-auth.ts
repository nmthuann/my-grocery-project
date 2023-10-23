import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

import { AlertTriangle } from 'lucide-react';

interface UserStore {
    user: any
}

const useAuth = create<UserStore>(
    
)

export default useAuth;