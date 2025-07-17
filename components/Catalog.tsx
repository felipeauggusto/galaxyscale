'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, MapPin, CheckCircle, MessageSquare } from 'lucide-react';

// ALTERAÇÃO 1: A interface agora aceita um ARRAY de tipos de conta.
interface Account {
  id: string;
  type: string;
  country: string;
  status: 'Disponível' | 'Reservada' | 'Vendida';
  price: number;
  features: string[];
  flag: string;
  accountType: ('Verificada' | 'Aquecida' | 'Com Gastos')[]; // <--- MUDANÇA AQUI
}

const Catalog: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('Todos');
  const [selectedStatus, setSelectedStatus] = useState('Todos');
  const [selectedAccountType, setSelectedAccountType] = useState('Todos');

  // ALTERAÇÃO 2: Todos os `accountType` agora são arrays para manter a consistência.
  const accounts: Account[] = [
    {
      id: '1',
      type: 'Start PRO BR',
      country: 'Brasil',
      status: 'Disponível',
      price: 299,
      features: [
        'Login + Senha + Cookies + Proxy',
        'Dupla verificação no Anunciante',
        'Histórico Limpo'
        'Gmail BR com mais de 15 anos de uso',
        'IP Dedicado',
        'Verificação Completa',
        'Documentação',
        'Suporte 24/7'
      ],
      flag: '🇧🇷',
      accountType: ['Verificada', 'Aquecida'] // <--- MUDANÇA AQUI
    },
    {
      id: '2',
      type: 'Premium BR',
      country: 'Brasil',
      status: 'Disponível',
      price: 1999,
      features: [
        'Login + Senha + Cookies + Proxy',
        'Dupla verificação no Anunciante',
        'G2 Financeiro verificado',
        'Operações Comerciais verificadas',
        'Gmail BR com mais de 15 anos de uso',
        'IP Dedicado',
        'Verificação Completa',
        'Documentação',
        'Hospedagem + Domínio incluso',
        'Campanha ativa e aquecida',
        'Suporte 24/7'
      ],
      flag: '🇧🇷',
      accountType: ['Aquecida', 'Com Gastos', 'Verificada'] // Este já era um array
    },
    {
      id: '3',
      type: 'Standard BR',
      country: 'Brasil',
      status: 'Disponível',
      price: 399,
      features: [
        'Login + Senha + Cookies + Proxy',
        'Dupla verificação no Anunciante',
        'Histórico Limpo'
        'Gmail BR com mais de 15 anos de uso',
        'IP Dedicado',
        'Verificação Completa',
        'Campanha ativa e aquecida',
        'Documentação',
        'Suporte 24/7'
      ],
      flag: '🇧🇷',
      accountType: ['Verificada', 'Aquecida', 'Com Gastos']
    },
    {
      id: '4',
      type: 'Start BR',
      country: 'Brasil',
      status: 'Disponível',
      price: 199,
      features: [
        'Login + Senha + Cookies + Proxy',
        'Dupla verificação no Anunciante',
        'Histórico Limpo'
        'Gmail BR com mais de 10 anos de uso',
        'IP Dedicado',
        'Verificação Completa',
        'Documentação',
        'Suporte 24/7'
      ],
      flag: '🇧🇷',
      accountType: ['Verificada', 'Aquecida'] // <--- MUDANÇA AQUI
    },
    {
      id: '5',
      type: 'Start BR',
      country: 'Brasil',
      status: 'Disponível',
      price: 99,
      features: [
        'Login + Senha + Cookies + Proxy',
        'Dupla verificação no Anunciante',
        'Histórico Limpo'
        'Gmail BR com mais de 5 anos de uso',
        'IP Dedicado',
        'Verificação Completa',
        'Documentação',
        'Suporte 24/7'
      ],
      flag: '🇧🇷',
      accountType: ['Verificada'] // <--- MUDANÇA AQUI
    },
  ];

  const countries = ['Todos', ...Array.from(new Set(accounts.map(acc => acc.country)))];
  const statuses = ['Todos', 'Disponível', 'Reservada', 'Vendida'];
  const accountTypes = ['Todos', 'Verificada', 'Aquecida', 'Com Gastos'];

  // ALTERAÇÃO 3: A lógica de filtro agora usa `.includes()` para checar se o tipo selecionado existe no array.
  const filteredAccounts = accounts.filter(account => {
    const countryMatch = selectedCountry === 'Todos' || account.country === selectedCountry;
    const statusMatch = selectedStatus === 'Todos' || account.status === selectedStatus;
    const accountTypeMatch = selectedAccountType === 'Todos' || account.accountType.includes(selectedAccountType as any); // <--- MUDANÇA AQUI
    return countryMatch && statusMatch && accountTypeMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponível':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Reservada':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Vendida':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getAccountTypeColor = (accountType: string) => {
    switch (accountType) {
      case 'Verificada':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Aquecida':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Com Gastos':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getAccountTypeDescription = (accountType: string) => {
    switch (accountType) {
      case 'Verificada':
        return 'Conta totalmente verificada e pronta para uso';
      case 'Aquecida':
        return 'Conta com histórico de atividade e aquecimento';
      case 'Com Gastos':
        return 'Conta com histórico de gastos e campanhas ativas';
      default:
        return '';
    }
  };

  return (
    <section id="catalog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold galaxy-gradient mb-6">
            Catálogo de Contas
          </h2>
          <p className="text-xl sm:text-2xl text-galaxy-light font-poppins font-light max-w-4xl mx-auto">
            Contas premium verificadas e prontas para escalar seus negócios
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-6 mb-12"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="text-galaxy-cyan w-5 h-5" />
            <span className="text-galaxy-light font-poppins text-lg font-medium">Filtros:</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-galaxy-light font-poppins text-sm font-medium mb-2">
                País
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-galaxy-dark/50 border border-galaxy-purple/20 rounded-lg px-4 py-2 text-galaxy-light font-poppins focus:outline-none focus:border-galaxy-purple"
              >
                {countries.map(country => (
                  <option key={country} value={country} className="bg-galaxy-dark">
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-galaxy-light font-poppins text-sm font-medium mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-galaxy-dark/50 border border-galaxy-purple/20 rounded-lg px-4 py-2 text-galaxy-light font-poppins focus:outline-none focus:border-galaxy-purple"
              >
                {statuses.map(status => (
                  <option key={status} value={status} className="bg-galaxy-dark">
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-galaxy-light font-poppins text-sm font-medium mb-2">
                Tipo de Conta
              </label>
              <select
                value={selectedAccountType}
                onChange={(e) => setSelectedAccountType(e.target.value)}
                className="w-full bg-galaxy-dark/50 border border-galaxy-purple/20 rounded-lg px-4 py-2 text-galaxy-light font-poppins focus:outline-none focus:border-galaxy-purple"
              >
                {accountTypes.map(type => (
                  <option key={type} value={type} className="bg-galaxy-dark">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedCountry('Todos');
                  setSelectedStatus('Todos');
                  setSelectedAccountType('Todos');
                }}
                className="w-full bg-gradient-to-r from-galaxy-purple to-galaxy-cyan text-white py-2 rounded-lg font-poppins text-sm font-medium hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift"
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grid de Contas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccounts.map((account, index) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-6 hover:border-galaxy-purple hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{account.flag}</span>
                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-galaxy-light">
                      {account.type}
                    </h3>
                    <p className="text-galaxy-light/70 font-poppins text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {account.country}
                    </p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(account.status)}`}>
                  {account.status}
                </div>
              </div>
              
              {/* ALTERAÇÃO 4: Renderiza um badge para CADA tipo de conta e mostra a descrição do PRIMEIRO tipo. */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {account.accountType.map((type) => (
                    <div key={type} className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getAccountTypeColor(type)}`}>
                      {type}
                    </div>
                  ))}
                </div>
                <p className="text-galaxy-light/60 font-poppins text-xs">
                  {getAccountTypeDescription(account.accountType[0])}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-3xl font-orbitron font-bold text-galaxy-cyan mb-2">
                  R${account.price}
                </p>
                <div className="space-y-2">
                  {account.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-galaxy-cyan w-4 h-4 flex-shrink-0" />
                      <span className="text-galaxy-light/80 font-poppins text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* ALTERAÇÃO 5: O link do WhatsApp agora junta os tipos com vírgula para não quebrar. */}
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/5544999629411?text=Olá! Gostaria de fazer o pedido da conta ${account.type} - ${account.country} (${account.accountType.join(', ')})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center py-3 rounded-lg font-poppins text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    account.status === 'Disponível' 
                      ? 'bg-gradient-to-r from-galaxy-purple to-galaxy-cyan text-white hover:shadow-lg hover:shadow-galaxy-purple/25' 
                      : 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
                  }`}
                  {...(account.status !== 'Disponível' && { onClick: (e) => e.preventDefault() })}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Fazer Pedido</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAccounts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-galaxy-light/70 font-poppins text-lg">
              Nenhuma conta encontrada com os filtros selecionados.
            </p>
            <button
              onClick={() => {
                setSelectedCountry('Todos');
                setSelectedStatus('Todos');
                setSelectedAccountType('Todos');
              }}
              className="mt-4 bg-gradient-to-r from-galaxy-purple to-galaxy-cyan text-white px-6 py-2 rounded-lg font-poppins text-sm font-medium hover:shadow-lg hover:shadow-galaxy-purple/25 transition-all duration-300 hover-lift"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Legenda dos Tipos de Conta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-galaxy-dark/50 backdrop-blur-md border border-galaxy-purple/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-orbitron font-semibold text-galaxy-light mb-6 text-center">
            Tipos de Conta Disponíveis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-400 w-8 h-8" />
              </div>
              <h4 className="text-lg font-orbitron font-semibold text-galaxy-light mb-2">
                Conta Verificada
              </h4>
              <p className="text-galaxy-light/70 font-poppins text-sm">
                Contas totalmente verificadas com documentação completa e prontas para uso imediato.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-orange-400 w-8 h-8" />
              </div>
              <h4 className="text-lg font-orbitron font-semibold text-galaxy-light mb-2">
                Conta Aquecida
              </h4>
              <p className="text-galaxy-light/70 font-poppins text-sm">
                Contas com histórico de atividade e período de aquecimento para melhor performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-purple-400 w-8 h-8" />
              </div>
              <h4 className="text-lg font-orbitron font-semibold text-galaxy-light mb-2">
                Conta com Gastos
              </h4>
              <p className="text-galaxy-light/70 font-poppins text-sm">
                Contas com histórico de gastos e campanhas ativas, ideais para escaladores experientes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;